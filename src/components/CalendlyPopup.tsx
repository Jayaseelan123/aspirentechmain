import { useState } from "react";
import { PopupModal } from "react-calendly";

export default function CalendlyPopup() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
      >
        Book Demo
      </button>

      {/* Calendly Modal */}
      <PopupModal
        url="https://calendly.com/salmanabs1512/30min"
        onModalClose={() => setOpen(false)}
        open={open}
        rootElement={document.getElementById("root")!}
      />
    </div>
  );
}
