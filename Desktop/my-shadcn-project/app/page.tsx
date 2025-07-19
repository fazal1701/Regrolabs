export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to RegroLabs
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Advanced laboratory management and research solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
              Explore Products
            </a>
            <a href="/about" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
