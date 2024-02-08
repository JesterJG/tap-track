import { IncrementTracker, DecrementTracker, DeleteTracker, RenameTracker } from "./buttons";
import { fetchTrackers } from "@/app/lib/data";

export default function TrackerList() {
  const trackers = fetchTrackers();
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {trackers?.map((tracker) => (
              <div
                key={tracker.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{tracker.name}</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {tracker.value}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <IncrementTracker id={tracker.id} />
                    <DecrementTracker id={tracker.id} />
                    <DeleteTracker id={tracker.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Tracker Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Current Value
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {trackers?.map((tracker) => (
                <tr
                  key={tracker.id}
                  className="w-full border-b py-2 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3">
                    {tracker.name}
                  </td>
                  <td className="whitespace-nowrap px-3">
                    {tracker.value}
                  </td>
                  <td className="whitespace-nowrap pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <IncrementTracker id={tracker.id} />
                      <DecrementTracker id={tracker.id} />
                      <RenameTracker id={tracker.id} />
                      <DeleteTracker id={tracker.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}