
const DashboardHomePage = () => {


  return (
    <div className="grid gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Total Users</h3>
          <div className="mt-2 text-2xl font-bold text-gray-900">12,345</div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Revenue</h3>
          <div className="mt-2 text-2xl font-bold text-gray-900">$45,678</div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Active Sessions</h3>
          <div className="mt-2 text-2xl font-bold text-gray-900">234</div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Conversion Rate</h3>
          <div className="mt-2 text-2xl font-bold text-gray-900">3.45%</div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
          <div className="mt-4 rounded-md border border-gray-200">
            <div className="p-4">
              <p className="text-gray-500">Your dashboard content goes here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
