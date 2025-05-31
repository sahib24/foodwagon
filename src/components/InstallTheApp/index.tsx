import Head from "next/head";

export default function FoodOrderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Food Delivery App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header Section */}
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <h1 className="text-xl font-bold text-center">
          What do you have a taste for?
        </h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Order Status */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <h2 className="font-semibold text-lg mb-2">Your Order</h2>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">SFA Health Rev</h3>
              <p className="text-gray-500 text-sm">30 mins</p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              Off-Adults
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto mb-6 hide-scrollbar">
          {[
            "Chapters",
            "Children",
            "Average Social",
            "FTA Part C&V",
            "Email to customers",
          ].map((tab) => (
            <button
              key={tab}
              className="flex-shrink-0 bg-white rounded-full px-4 py-2 mr-2 shadow-sm text-sm"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Navigation */}
        <nav className="grid grid-cols-4 gap-4 mb-8">
          {["Browse", "Learn", "Installment", "Discover"].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center h-24"
            >
              <span className="text-lg font-medium">{item}</span>
            </div>
          ))}
        </nav>

        {/* Restaurants Section */}
        <section>
          <h2 className="text-xl font-bold mb-4">Lunch Restaurants Near You</h2>

          <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">GLOBAL</h3>
                  <p className="text-gray-600 text-sm">Health & Business</p>
                </div>
                <span className="text-gray-500 text-sm">50 min</span>
              </div>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section className="bg-blue-600 text-white rounded-lg p-6 mt-8">
          <h2 className="text-xl font-bold mb-2">Install the app</h2>
          <p className="mb-4">
            It's never been easier to order food. Look for the finest discounts
            and you'll be lost in a world of delectable food.
          </p>

          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center">
              <span className="mr-2">GET IT ON</span>
              <span className="font-bold">Google Play</span>
            </button>

            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center">
              <span className="mr-2">Download on the</span>
              <span className="font-bold">App Store</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
