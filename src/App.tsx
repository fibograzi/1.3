import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages will be imported here as they are created
// import HomePage from './pages/HomePage';
// import GamesPage from './pages/GamesPage';
// import TokenomicsPage from './pages/TokenomicsPage';
// import NFTMarketplacePage from './pages/NFTMarketplacePage';
// import LootwheelPage from './pages/LootwheelPage';
// import AboutUsPage from './pages/AboutUsPage';
// import FAQPage from './pages/FAQPage';
// import BlogPage from './pages/BlogPage';
// import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        {/* Placeholder for Header component */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#b829f7]/30 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold cyberpunk-heading">
              <span className="text-[#b829f7]">MINI</span>
              <span className="text-[#39ff14]">GAME</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-[#39ff14] transition-colors">Home</a>
              <a href="/games" className="hover:text-[#39ff14] transition-colors">Games</a>
              <a href="/tokenomics" className="hover:text-[#39ff14] transition-colors">Tokenomics</a>
              <a href="/nft" className="hover:text-[#39ff14] transition-colors">NFTs</a>
              <a href="/lootwheel" className="hover:text-[#39ff14] transition-colors">Lootwheel</a>
              <a href="/about" className="hover:text-[#39ff14] transition-colors">About</a>
              <a href="/faq" className="hover:text-[#39ff14] transition-colors">FAQ</a>
            </nav>
            <button className="btn-primary">Connect Wallet</button>
          </div>
        </header>

        {/* Main content */}
        <main className="pt-24 pb-16">
          <Routes>
            {/* Routes will be added here as pages are created */}
            <Route path="/" element={<PlaceholderHome />} />
            <Route path="/games" element={<PlaceholderPage title="Games" />} />
            <Route path="/tokenomics" element={<PlaceholderPage title="Tokenomics" />} />
            <Route path="/nft" element={<PlaceholderPage title="NFT Marketplace" />} />
            <Route path="/lootwheel" element={<PlaceholderPage title="Lootwheel" />} />
            <Route path="/about" element={<PlaceholderPage title="About Us" />} />
            <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
            <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
          </Routes>
        </main>

        {/* Placeholder for Footer component */}
        <footer className="bg-[#0a0a0a] border-t border-[#39ff14]/30 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 cyberpunk-heading">MINIGAME</h3>
                <p className="text-gray-400">Web3 Gaming Platform with 3-minute games on Solana blockchain.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4 text-[#39ff14]">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-400 hover:text-[#39ff14]">Home</a></li>
                  <li><a href="/games" className="text-gray-400 hover:text-[#39ff14]">Games</a></li>
                  <li><a href="/tokenomics" className="text-gray-400 hover:text-[#39ff14]">Tokenomics</a></li>
                  <li><a href="/nft" className="text-gray-400 hover:text-[#39ff14]">NFTs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4 text-[#39ff14]">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-400 hover:text-[#39ff14]">About Us</a></li>
                  <li><a href="/faq" className="text-gray-400 hover:text-[#39ff14]">FAQ</a></li>
                  <li><a href="/blog" className="text-gray-400 hover:text-[#39ff14]">Blog</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-[#39ff14]">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4 text-[#39ff14]">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="https://t.me/MINIGAME_sol" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#b829f7]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.5 15.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                      <path d="M18.5 12h-16"></path>
                      <path d="M2.5 8v8"></path>
                      <path d="M8.5 16.5v-9"></path>
                      <path d="M14.5 12H8"></path>
                    </svg>
                  </a>
                  <a href="https://x.com/MINIGAME_sol" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#b829f7]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[#b829f7]/30 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} MINIGAME. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </AnimatePresence>
  );
};

// Placeholder components until actual pages are created
const PlaceholderHome: React.FC = () => (
  <div className="container mx-auto px-4">
    {/* Hero Section */}
    <section className="py-20 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        <span className="text-[#b829f7] neon-purple-glow">3 MINUTE</span> <span className="text-[#39ff14] neon-green-glow">GAMES</span>
      </h1>
      <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
        Web3 Gaming Platform with fast-paced games on Solana blockchain. Play, earn, and collect NFTs in a cyberpunk universe.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button className="btn-primary text-lg">Play Now</button>
        <button className="btn-secondary text-lg">Learn More</button>
      </div>
    </section>

    {/* Featured Games */}
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-10 text-center cyberpunk-heading">Featured Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Neon Agar", desc: "3D Agar.io variant in cyberpunk style" },
          { title: "Cyber Slither", desc: "Slither-like game with neon aesthetics" },
          { title: "Grid Conquest", desc: "Paper.io-like territory control game" }
        ].map((game, index) => (
          <div key={index} className="cyberpunk-card">
            <div className="h-48 bg-gradient-to-br from-[#b829f7]/20 to-[#39ff14]/20 mb-4 rounded flex items-center justify-center">
              <span className="text-4xl">{index + 1}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{game.title}</h3>
            <p className="text-gray-400 mb-4">{game.desc}</p>
            <button className="btn-primary text-sm">Play Now</button>
          </div>
        ))}
      </div>
    </section>

    {/* Tokenomics Preview */}
    <section className="py-16 bg-[#0a0a0a]/50 rounded-lg border border-[#b829f7]/20 p-8">
      <h2 className="text-3xl font-bold mb-10 text-center cyberpunk-heading">Tokenomics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#b829f7]">SPINZ Token</h3>
          <p className="text-gray-300 mb-6">The main trading token of the MINIGAME ecosystem with a total supply of 1 billion.</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Public Launch:</span>
              <span className="text-[#39ff14]">25%</span>
            </div>
            <div className="flex justify-between">
              <span>Liquidity/Bonding:</span>
              <span className="text-[#39ff14]">20%</span>
            </div>
            <div className="flex justify-between">
              <span>Community/Staking:</span>
              <span className="text-[#39ff14]">20%</span>
            </div>
            <div className="flex justify-between">
              <span>Team & Founders:</span>
              <span className="text-[#39ff14]">10%</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#39ff14]">WHEEL Token</h3>
          <p className="text-gray-300 mb-6">In-game reward token earned through gameplay and used for the lootwheel and in-game purchases.</p>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#39ff14]/20 flex items-center justify-center mr-4">
                <span className="text-[#39ff14]">1</span>
              </div>
              <span>Play games to earn WHEEL tokens</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#39ff14]/20 flex items-center justify-center mr-4">
                <span className="text-[#39ff14]">2</span>
              </div>
              <span>Spend WHEEL on the lootwheel</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#39ff14]/20 flex items-center justify-center mr-4">
                <span className="text-[#39ff14]">3</span>
              </div>
              <span>Win NFTs, boosts, or extra SPINZ</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="btn-primary">View Full Tokenomics</button>
      </div>
    </section>

    {/* NFT Preview */}
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-10 text-center cyberpunk-heading">NFT Collection</h2>
      <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto">
        Collect unique meme-character NFTs that unlock special abilities and bonuses in our games.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="cyberpunk-card">
            <div className="h-40 bg-gradient-to-br from-[#b829f7]/30 to-[#39ff14]/30 mb-4 rounded flex items-center justify-center">
              <span className="text-2xl">NFT #{item}</span>
            </div>
            <h3 className="text-lg font-bold mb-1">Cyber Meme #{item}</h3>
            <p className="text-gray-400 text-sm mb-3">Unlocks special abilities in games</p>
            <div className="flex justify-between items-center">
              <span className="text-[#39ff14]">Rare</span>
              <button className="btn-secondary text-xs">View</button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn-primary">Explore NFT Marketplace</button>
      </div>
    </section>

    {/* Lootwheel Preview */}
    <section className="py-16 bg-[#0a0a0a]/50 rounded-lg border border-[#39ff14]/20 p-8">
      <h2 className="text-3xl font-bold mb-10 text-center cyberpunk-heading">Lootwheel</h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <div className="aspect-square rounded-full border-8 border-[#b829f7] relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-4 border-[#39ff14] m-4"></div>
            <div className="text-center">
              <p className="text-2xl font-bold mb-2">Spin to Win</p>
              <button className="btn-secondary">Spin Wheel</button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">How It Works</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-[#b829f7] flex items-center justify-center mr-3 mt-1">
                <span className="text-xs">1</span>
              </div>
              <p>Earn WHEEL tokens by playing our games</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-[#b829f7] flex items-center justify-center mr-3 mt-1">
                <span className="text-xs">2</span>
              </div>
              <p>Spend your WHEEL tokens to spin the lootwheel</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-[#b829f7] flex items-center justify-center mr-3 mt-1">
                <span className="text-xs">3</span>
              </div>
              <p>Win NFTs, game boosts, or additional SPINZ tokens</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-[#b829f7] flex items-center justify-center mr-3 mt-1">
                <span className="text-xs">4</span>
              </div>
              <p>The more SPINZ you hold, the higher your reward multiplier</p>
            </li>
          </ul>
          <div className="mt-6">
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-6 cyberpunk-heading">Ready to Play?</h2>
      <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
        Connect your wallet and start playing to earn rewards in the MINIGAME ecosystem.
      </p>
      <button className="btn-primary text-lg px-10 py-3">Connect Wallet</button>
    </section>
  </div>
);

const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="container mx-auto px-4 py-10">
    <h1 className="text-4xl font-bold mb-6 cyberpunk-heading">{title}</h1>
    <p className="text-gray-300 mb-6">This page is under construction. Content coming soon!</p>
    <div className="cyberpunk-card">
      <p className="text-center py-10">Content for {title} will be available soon.</p>
    </div>
  </div>
);

export default App;
