import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { LogOut, LogIn, User, PanelLeftOpen, PanelLeftClose, Home, Pen, Trophy } from 'lucide-react';

function UserSidebar() {
    const { logout, isSidebarOpen, setSidebarOpen, user } = useStore();
    const navigate = useNavigate();

    if (!isSidebarOpen) {
        return (
            <div className='hidden lg:flex w-12 h-screen bg-ink text-paper-50 flex-col z-50 fixed left-0 top-0 shadow-2xl items-center pt-4'>
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="p-2 hover:bg-paper-50/10 transition-all"
                    title="Open Sidebar"
                >
                    <PanelLeftOpen className="h-6 w-6" />
                </button>

                <div className="rounded-full mt-4 p-1 overflow-hidden hover:bg-paper-50/10 transition-all">
                    {user?.profilePicture ? (
                        <img src={user.profilePicture} alt="Avatar" className="w-8 h-8 object-cover rounded-full" />
                    ) : (
                        <div className="p-1 w-full h-full flex items-center justify-center">
                            <User className="w-6 h-6 text-paper" />
                        </div>
                    )}
                </div>

                <nav className="flex-1 p-6 space-y-4 mt-8">
                    <Link to="/">
                        <div className="p-2 hover:bg-paper-50/10 rounded-lg transition-all">
                            <Home className="w-6 h-6 opacity-70 hover:opacity-100" />
                        </div>
                    </Link>

                    <Link to="/user-works">
                        <div className="p-2 hover:bg-paper-50/10 rounded-lg transition-all">
                            <Pen className="w-6 h-6 opacity-70 hover:opacity-100" />
                        </div>
                    </Link>

                    <Link to="/leaderboard">
                        <div className="p-2 hover:bg-paper-50/10 rounded-lg transition-all">
                            <Trophy className="w-6 h-6 opacity-70 hover:opacity-100" />
                        </div>
                    </Link>
                </nav>

                <div>
                    {user ? (
                        <button
                            onClick={() => {
                                logout();
                                navigate('/');
                                setSidebarOpen(false);
                            }}
                            className="w-full p-5 flex items-center justify-center space-x-3 text-red-400 hover:bg-red-500/10 transition-all group"
                        >
                            <LogOut className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    ) : (
                        <Link to="/login" className="block w-full" onClick={() => setSidebarOpen(false)}>
                            <button className="w-full p-5 flex items-center justify-center space-x-3 text-paper hover:bg-paper/10 transition-all group">
                                <LogIn className="w-5 h-5" />

                            </button>
                        </Link>
                    )}
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Backdrop for mobile */}
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setSidebarOpen(false)}
            />

            <aside className="w-48 h-screen bg-ink text-paper-50 flex flex-col z-50 fixed left-0 top-0 shadow-2xl border-r border-paper-50/5">
                <div className="border-b border-paper-50/10 relative group">
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="absolute top-4 right-2 p-2 text-paper-50/40 hover:text-paper-50 hover:bg-paper-50/10 rounded-full transition-all"
                        title="Close Sidebar"
                    >
                        <PanelLeftClose className="h-6 w-6" />
                    </button>

                    <div className="flex items-center space-x-3 mb-2 mt-16 p-2">
                        <div className="rounded-xl">
                            {user?.profilePicture ? (
                                <img src={user.profilePicture} alt="Avatar" className="w-7 h-7 object-cover rounded-full" />
                            ) : (
                                <div className="">
                                    <User className="w-7 h-7 text-paper" />
                                </div>
                            )}
                        </div>
                        <div>
                            <h1 className="text-[14px] font-black uppercase tracking-[0.2em]">{user?.username || 'Manuscript'}</h1>
                            <p className="text-[8px] opacity-40 uppercase tracking-[0.3em] font-bold">{user ? 'Legendary Member' : 'Glory your Art'}</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 p-1 space-y-4 overflow-y-auto mt-4">
                    <Link to="/" className="flex items-center space-x-4 p-2 rounded-xl hover:bg-paper-50/5 transition-all group border border-transparent hover:border-paper-50/10">
                        <div className="p-2">
                            <Home className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                        </div>
                        <span className="text-[12px] font-bold uppercase tracking-widest text-paper-50/80 group-hover:text-paper-50">Gallery Feed</span>
                    </Link>

                    <Link to="/user-works" className="flex items-center space-x-4 p-2 rounded-xl hover:bg-paper-50/5 transition-all group border border-transparent hover:border-paper-50/10">
                        <div className="p-2">
                            <Pen className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                        </div>
                        <span className="text-[12px] font-bold uppercase tracking-widest text-paper-50/80 group-hover:text-paper-50">My Works</span>
                    </Link>

                    <Link to="/leaderboard" className="flex items-center space-x-4 p-2 rounded-xl hover:bg-paper-50/5 transition-all group border border-transparent hover:border-paper-50/10">
                        <div className="p-2">
                            <Trophy className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                        </div>
                        <span className="text-[12px] font-bold uppercase tracking-widest text-paper-50/80 group-hover:text-paper-50">Hall of Fame</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-paper-50/10 bg-black/20">
                    {user ? (
                        <button
                            onClick={() => {
                                logout();
                                navigate('/');
                                setSidebarOpen(false);
                            }}
                            className="w-full flex items-center justify-center space-x-3 p-4 text-red-400 hover:bg-red-500/10 rounded-xl transition-all border border-red-500/20 hover:border-red-500/40 group"
                        >
                            <LogOut className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            <span className="text-sm font-bold uppercase tracking-widest">Sign Out</span>
                        </button>
                    ) : (
                        <Link to="/login" className="block w-full" onClick={() => setSidebarOpen(false)}>
                            <button className="w-full flex items-center justify-center space-x-3 p-4 bg-paper-50 text-ink hover:bg-paper-100 rounded-xl transition-all font-bold uppercase tracking-widest text-sm shadow-lg hover:shadow-paper-50/10">
                                <LogIn className="w-5 h-5" />
                                <span>Sign In</span>
                            </button>
                        </Link>
                    )}
                </div>
            </aside>
        </>
    );
}

export default UserSidebar;
