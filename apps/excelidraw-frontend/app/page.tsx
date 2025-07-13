"use client";

import { CreateRoomModal } from "@/components/CreateRoomModal";
import { JoinRoomModal } from "@/components/JoinRoomModal";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Pencil, Share2, Users2, Sparkles, Github, Download } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();


  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  async function handleCreateRoom(roomName: string) {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:3002/room", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: roomName }),
      });
      const data = await res.json();
      console.log(data)
      const roomId = data.roomId
      if (!res.ok || !data.roomId) {
        setError(data.message || "Failed to create room");
      } else {
        alert("Room created! Room ID: " + data.roomId);
        router.push(`/canvas/${roomId}`);
        setShowCreate(false);
      }
    } catch (e) {
      setError("Network error");
    }
    setLoading(false);
  }

  async function handleJoinRoom(roomCode: string) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`http://localhost:3002/chats/${roomCode}`);
      const data = await res.json();
      if (!res.ok || !data.messages) {
        setError(data.message || "Room not found");
      } else {
        alert("Joined room! Room ID: " + roomCode);
        router.push(`/canvas/${roomCode}`);
        setShowJoin(false);
      }
    } catch (e) {
      setError("Network error");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/60 to-primary/10">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Decorative Gradient */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl opacity-60" />
        </div>
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 text-primary font-bold text-2xl tracking-tight">
                <Sparkles className="h-7 w-7 animate-pulse" />
                WhiteboardX
              </span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground drop-shadow-lg">
              Collaborative Whiteboarding
              <span className="text-primary block">Made Simple</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Create, collaborate, and share beautiful diagrams and sketches with our intuitive drawing tool.
              <br className="hidden sm:block" />
              <span className="font-medium text-primary">No sign-up required.</span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {isLoggedIn ? (
                <>
                  <Button
                    variant="primary"
                    size="lg"
                    className="h-12 px-6 shadow-lg hover:scale-105 text-black transition-transform"
                    onClick={() => setShowCreate(true)}
                  >
                    Create Room
                    <Pencil className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-6 border-primary hover:bg-primary/10 hover:border-primary transition"
                    onClick={() => setShowJoin(true)}
                  >
                    Join Room
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/signin">
                    <Button
                      variant="primary"
                      size="lg"
                      className="h-12 px-6 shadow-lg hover:scale-105 transition-transform"
                    >
                      Sign in
                      <Pencil className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-12 px-6 border-primary hover:bg-primary/10 hover:border-primary transition"
                    >
                      Sign up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Modals */}
      <CreateRoomModal
        open={showCreate}
        onClose={() => setShowCreate(false)}
        onCreate={handleCreateRoom}
        loading={loading}
      />
      <JoinRoomModal
        open={showJoin}
        onClose={() => setShowJoin(false)}
        onJoin={handleJoinRoom}
        loading={loading}
      />

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 border-2 hover:border-primary transition-colors shadow-md hover:shadow-xl bg-white/80 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10 animate-pulse">
                  <Share2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Real-time Collaboration</h3>
              </div>
              <p className="mt-4 text-muted-foreground">
                Work together with your team in real-time. Share your drawings instantly with a simple link.
              </p>
            </Card>
            <Card className="p-6 border-2 hover:border-primary transition-colors shadow-md hover:shadow-xl bg-white/80 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10 animate-pulse">
                  <Users2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Multiplayer Editing</h3>
              </div>
              <p className="mt-4 text-muted-foreground">
                Multiple users can edit the same canvas simultaneously. See who's drawing what in real-time.
              </p>
            </Card>
            <Card className="p-6 border-2 hover:border-primary transition-colors shadow-md hover:shadow-xl bg-white/80 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10 animate-pulse">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Smart Drawing</h3>
              </div>
              <p className="mt-4 text-muted-foreground">
                Intelligent shape recognition and drawing assistance helps you create perfect diagrams.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-tr from-primary to-primary/80 rounded-3xl p-8 sm:p-16 shadow-2xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to start creating?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80">
                Join thousands of users who are already creating amazing diagrams and sketches.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-12 px-6 bg-white/90 text-primary font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                  Open Canvas
                  <Pencil className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary transition"
                >
                  View Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 <span className="font-semibold text-primary">WhiteboardX</span>. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/devang-458"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Download className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;