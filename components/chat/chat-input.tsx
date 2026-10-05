import { ChangeEvent, FormEvent } from 'react';

interface ChatInputProps {
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export function ChatInput({ input, handleInputChange, handleSubmit }: ChatInputProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-20"
    >
      <div className="relative">
        <span className="absolute left-4 top-4 text-green-700">{'>'}</span>
        <input
          className="w-full p-4 pl-10 bg-black/90 border border-green-500/80 text-green-300 rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.2)] focus:outline-none focus:border-green-400 focus:shadow-[0_0_20px_rgba(0,255,0,0.4)] placeholder-green-800 font-mono transition-all"
          value={input}
          placeholder="Execute command..."
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}
