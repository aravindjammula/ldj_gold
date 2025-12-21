import React from 'react';

const AuthPage = () => {
  return (
    <div className="pt-40 pb-20 px-6 flex items-center justify-center bg-white">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-serif text-black mb-2 italic">Welcome to <span className="not-italic font-bold">LDJ Gold</span></h1>
        <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] mb-12">Identify your heritage account</p>
        
        <form className="space-y-8">
          <input 
            type="email" 
            placeholder="EMAIL ADDRESS" 
            className="w-full border-b border-black py-3 text-xs tracking-widest focus:outline-none focus:border-ldj-gold transition-colors"
          />
          <input 
            type="password" 
            placeholder="PASSWORD" 
            className="w-full border-b border-black py-3 text-xs tracking-widest focus:outline-none focus:border-ldj-gold transition-colors"
          />
          <button className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-[0.4em] hover:bg-ldj-gold transition-all duration-500 shadow-xl">
            Sign In
          </button>
        </form>
        
        <p className="mt-8 text-black text-[10px] uppercase tracking-widest cursor-pointer hover:text-ldj-gold transition-colors">
          Create an account
        </p>
      </div>
    </div>
  );
};

export default AuthPage;