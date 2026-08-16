const Payments = () => {
  return (
    <div className="p-4 sm:p-6 bg-white rounded-2xl border border-zinc-200/70 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base sm:text-lg tracking-tight font-bold text-zinc-900">
          Scheduled Payments
        </h3>
        <span className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-md">
          3 Upcoming
        </span>
      </div>

      <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        <table className="min-w-full divide-y divide-zinc-200 text-left">
          {/* HEAD */}
          <thead className="bg-zinc-50/75 rounded-lg">
            <tr>
              <th
                scope="col"
                className="px-3 sm:px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider"
              >
                Payee
              </th>

              <th
                scope="col"
                className="px-3 sm:px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider"
              >
                Amount
              </th>

              <th
                scope="col"
                className="px-3 sm:px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider"
              >
                Date
              </th>

              <th
                scope="col"
                className="px-3 sm:px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-zinc-100">
            {/* ROW-1 */}
            <tr className="hover:bg-zinc-50/50 transition-colors">
              {/* Payee */}
              <td className="px-3 sm:px-4 py-3.5 whitespace-nowrap text-sm font-medium text-zinc-900">
                <div className="flex items-center space-x-2.5">
                  <div className="size-8 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 overflow-hidden shrink-0">
                    <img
                      src="/user-6.png"
                      alt="profile-image"
                      className="size-full object-cover"
                    />
                  </div>
                  <span className="font-medium text-zinc-900">Loan Payment</span>
                </div>
              </td>

              {/* Amount */}
              <td className="px-3 sm:px-4 py-3.5 whitespace-nowrap text-sm font-semibold text-zinc-700">
                -$350.00
              </td>

              {/* Date */}
              <td className="px-3 sm:px-4 py-3.5 whitespace-nowrap text-sm text-zinc-500">
                Today, 15:00
              </td>

              {/* Status */}
              <td className="px-3 sm:px-4 py-3.5 whitespace-nowrap text-xs font-medium text-emerald-700">
                <div className="bg-emerald-50 text-emerald-700 border border-emerald-200/50 py-1 px-2.5 rounded-full inline-flex items-center">
                  <span className="inline-block w-1.5 h-1.5 mr-1.5 rounded-full bg-emerald-500"></span>
                  Approved
                </div>
              </td>
            </tr>

            {/* ROW-2 */}
            <tr className="hover:bg-zinc-50/50 transition-colors">
              {/* Payee */}
              <td className="px-3 sm:px-4 py-3.5 whitespace-nowrap text-sm font-medium text-zinc-900">
                <div className="flex items-center space-x-2.5">
                  <div className="size-8 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 overflow-hidden shrink-0">
                    <img
                      src="/user-5.png"
                      alt="profile-image"
                      className="size-full object-cover"
                    />
                  </div>
                  <span className="font-medium text-zinc-900">Home Credit</span>
                </div>
              </td>

              {/* Amount */}
              <td className="px-3 sm:px-4 py-3.5 whitespace-nowrap text-sm font-semibold text-zinc-700">
                -$1,200.00
              </td>

              {/* Date */}
              <td className="px-3 sm:px-4 py-3.5 whitespace-nowrap text-sm text-zinc-500">
                Tomorrow, 18:30
              </td>

              {/* Status */}
              <td className="px-3 sm:px-4 py-3.5 whitespace-nowrap text-xs font-medium text-amber-700">
                <div className="bg-amber-50 text-amber-700 border border-amber-200/50 py-1 px-2.5 rounded-full inline-flex items-center">
                  <span className="inline-block w-1.5 h-1.5 mr-1.5 rounded-full bg-amber-500"></span>
                  Pending
                </div>
              </td>
            </tr>

            {/* ROW-3 */}
            <tr className="hover:bg-zinc-50/50 transition-colors">
              {/* Payee */}
              <td className="px-3 sm:px-4 py-3.5 whitespace-nowrap text-sm font-medium text-zinc-900">
                <div className="flex items-center space-x-2.5">
                  <div className="size-8 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 overflow-hidden shrink-0">
                    <img
                      src="/user-4.png"
                      alt="profile-image"
                      className="size-full object-cover"
                    />
                  </div>
                  <span className="font-medium text-zinc-900">Student Loan</span>
                </div>
              </td>

              {/* Amount */}
              <td className="px-3 sm:px-4 py-3.5 whitespace-nowrap text-sm font-semibold text-zinc-700">
                -$150.00
              </td>

              {/* Date */}
              <td className="px-3 sm:px-4 py-3.5 whitespace-nowrap text-sm text-zinc-500">
                Fri, 10:00
              </td>

              {/* Status */}
              <td className="px-3 sm:px-4 py-3.5 whitespace-nowrap text-xs font-medium text-rose-700">
                <div className="bg-rose-50 text-rose-700 border border-rose-200/50 py-1 px-2.5 rounded-full inline-flex items-center">
                  <span className="inline-block w-1.5 h-1.5 mr-1.5 rounded-full bg-rose-500"></span>
                  Declined
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;