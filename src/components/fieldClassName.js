export const fieldClassName = (error) => `w-full rounded-lg border bg-white px-4 py-3 text-base transition placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
  error
    ? "border-red-600 focus:ring-red-200"
    : "border-slate-300 hover:border-slate-400 focus:border-purple-600 focus:ring-purple-200"
}`;
