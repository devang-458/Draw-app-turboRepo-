"use client";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "@repo/ui/button";

export function JoinRoomModal({
  open,
  onClose,
  onJoin,
  loading = false,
}: {
  open: boolean;
  onClose: () => void;
  onJoin: (roomCode: string) => void;
  loading?: boolean;
}) {
  const [roomCode, setRoomCode] = useState("");

  return (
    <Modal open={open} onClose={onClose} title="Join a Room">
      <input
        className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary border-neutral-400"
        placeholder="Room code"
        value={roomCode}
        onChange={e => setRoomCode(e.target.value)}
        disabled={loading}
      />
      <Button
        variant="primary"
        className="w-full py-2 border-neutral-400"
        disabled={loading || !roomCode.trim()}
        onClick={() => {
          if (roomCode.trim()) {
            onJoin(roomCode);
            setRoomCode("");
          }
        }}
      >
        {loading ? "Joining..." : "Join"}
      </Button>
    </Modal>
  );
}