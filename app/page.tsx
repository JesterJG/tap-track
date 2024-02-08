import Image from "next/image";
import TrackerList from "./ui/trackerList";
import ListManager from "./ui/listManager";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col justify-center rounded-lg bg-gray-50 px-6 py-10 md:w-2/6 md:px-20">
        <p className={`lusitana`}>
          <strong>Welcome to TapTracker</strong>
        </p>
        <p className={`lusitana`}>
          Keep track of your counters.
        </p>
      </div>
      <div className="TapTracker">
        <TrackerList />
        <ListManager />
      </div>
    </main>    
  )
}

