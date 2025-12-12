
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Bạn là trợ lý ảo AI của BowlanCloud - một nhà cung cấp dịch vụ hạ tầng mạng hàng đầu Việt Nam.
Nhiệm vụ của bạn là tư vấn cho khách hàng về các sản phẩm: Cloud Server, VPS, Proxy, Máy chủ vật lý và Anti-DDoS.

Thông tin sản phẩm cơ bản:
- VPS: Giá rẻ, phù hợp cá nhân, sinh viên. Từ 80k/tháng.
- Cloud Server: Cao cấp, NVMe, Backup an toàn. Từ 150k/tháng.
- Proxy: IPv4 Private, 4G Mobile Proxy. Ẩn danh tốt.
- Máy chủ vật lý: Cấu hình khủng, dành cho doanh nghiệp lớn.
- Anti-DDoS: Bảo vệ Layer 4/7, chống tấn công game/web.

Phong cách trả lời: Thân thiện, chuyên nghiệp, ngắn gọn, sử dụng tiếng Việt.
Nếu khách hàng hỏi về vấn đề kỹ thuật sâu hoặc thanh toán lỗi, hãy khuyên họ liên hệ hotline: 1900-xxxx hoặc telegram @bowlancloud_support.
`;

export const parseMarkdownFormatting = (text: string): string => {
  let result = text;
  
  // Bold: **text** or __text__
  result = result.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>');
  result = result.replace(/__(.*?)__/g, '<strong class="font-bold text-white">$1</strong>');
  
  // Italic: *text* or _text_
  result = result.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
  result = result.replace(/_(.*?)_/g, '<em class="italic">$1</em>');
  
  // Underline: ~~text~~ 
  result = result.replace(/~~(.*?)~~/g, '<u class="underline">$1</u>');
  
  // Code: `text`
  result = result.replace(/`(.*?)`/g, '<code class="bg-slate-700 text-yellow-300 px-2 py-1 rounded text-sm font-mono">$1</code>');
  
  // Code blocks: ```text```
  result = result.replace(/```[\s\S]*?```/g, (match) => {
    const code = match.replace(/```/g, '');
    return `<pre class="bg-slate-800 text-green-300 p-3 rounded font-mono text-sm overflow-x-auto"><code>${code}</code></pre>`;
  });
  
  // Line breaks: preserve \n as <br/>
  result = result.replace(/\n/g, '<br/>');
  
  // Headers: # text, ## text, ### text
  result = result.replace(/^### (.*?)$/gm, '<h3 class="font-bold text-lg mt-2 text-primary">$1</h3>');
  result = result.replace(/^## (.*?)$/gm, '<h2 class="font-bold text-xl mt-3 text-primary">$1</h2>');
  result = result.replace(/^# (.*?)$/gm, '<h1 class="font-bold text-2xl mt-4 text-primary">$1</h1>');
  
  // Numbered lists: 1. item, 2. item, etc
  result = result.replace(/^\d+\.\s+(.*?)$/gm, '<div class="ml-4 my-2"><span class="font-bold text-primary">•</span> $1</div>');
  
  // Bullet lists: - item
  result = result.replace(/^-\s+(.*?)$/gm, '<div class="ml-4 my-2"><span class="font-bold text-primary">•</span> $1</div>');
  
  // Color highlight for prices (k/tháng, đ/tháng)
  result = result.replace(/(\d+k\/tháng)/g, '<span class="text-green-400 font-bold">$1</span>');
  result = result.replace(/(\d+[0-9]{3}đ\/tháng)/g, '<span class="text-green-400 font-bold">$1</span>');
  
  // Highlight important keywords
  result = result.replace(/(VPS|Cloud Server|Proxy|Máy chủ vật lý|Dedicated Server|Anti-DDoS|IPv4|Mobile)/g, '<span class="text-secondary font-semibold">$1</span>');
  
  // Highlight service features in parentheses
  result = result.replace(/\((.*?)\)/g, '<span class="text-slate-300 italic">($1)</span>');
  
  return result;
};

export const streamResponse = async (message: string): Promise<AsyncGenerator<{ text: string; html: string }>> => {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    console.warn("Missing GEMINI_API_KEY in environment variables");
    const fallbackText = "Xin chào! Hiện tại tôi chưa được kết nối với API Key. Tuy nhiên, tôi có thể giúp bạn tìm hiểu về VPS, Cloud Server tại BowlanCloud. Bạn cần tư vấn gói nào?";
    return (async function* () {
      yield { text: fallbackText, html: fallbackText };
    })();
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        }
    });

    // Sending the message to the chat session
    const result = await chat.sendMessageStream({ message });
    
    // Transform the response to match expected format
    return (async function* () {
      for await (const chunk of result) {
        const text = chunk.text || "";
        const html = parseMarkdownFormatting(text);
        yield { text, html };
      }
    })();

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
