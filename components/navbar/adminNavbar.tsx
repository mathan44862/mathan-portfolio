import Settings from "../settings";

export default function AdminNavbar() {
  return (
    <div className="min-w-full p-8 flex justify-between items-center bg-black fixed top-0">
      <div className="flex gap-2"></div>
      <div>
        <Settings />
      </div>
    </div>
  );
}
