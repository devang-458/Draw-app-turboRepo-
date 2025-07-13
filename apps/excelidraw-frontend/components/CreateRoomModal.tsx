"use client";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "@repo/ui/button";

export function CreateRoomModal({
    open,
    onClose,
    onCreate,
    loading = false,
}: {
    open: boolean;
    onClose: () => void;
    onCreate: (roomName: string) => void;
    loading?: boolean;
}) {
    const [roomName, setRoomName] = useState("");

    return (
        <Modal open={open} onClose={onClose} title="Create a Room">
            <input
                className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary border-neutral-400"
                placeholder="Room name"
                value={roomName}
                onChange={e => setRoomName(e.target.value)}
                disabled={loading}
            />
            <Button
                variant="primary"
                className="w-full py-2 border-neutral-400"
                disabled={loading || !roomName.trim()}
                onClick={() => {
                    if (roomName.trim()) {
                        onCreate(roomName);
                        setRoomName("");
                    }
                }}
            >
                {loading ? "Creating..." : "Create"}
            </Button>
        </Modal>
    );
}