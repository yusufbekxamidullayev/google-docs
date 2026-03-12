"use client";

export default function App() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    await fetch(
      "https://script.google.com/macros/s/AKfycbxM5LjDc8sNzY_0_-W2Z8kbD-ifQf-YXV53lF2YGRU1nR1hc0UESujLohKcSEf9I30/exec",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    );

    alert("Yuborildi ✅");
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100 p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-gray-100">

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Ma'lumot yuborish
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="text-sm text-gray-600">Familiya</label>
            <input
              name="surname"
              required
              className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              placeholder="Familiyangiz"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Ism</label>
            <input
              name="name"
              required
              className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              placeholder="Ismingiz"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Yosh</label>
            <input
              name="age"
              required
              type="number"
              className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              placeholder="Yoshingiz"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 active:scale-95 transition"
          >
            Yuborish
          </button>

        </form>
      </div>
    </div>
  );
}