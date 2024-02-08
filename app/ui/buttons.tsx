import { MinusIcon, PlusIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';

export function IncrementTracker({ id }: { id: string }) {
  return (
      <button
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <PlusIcon className="h-5 md:ml-4" />
      </button>
  );
}
  
export function DecrementTracker({ id }: { id: string }) {
  return (
    <button className="rounded-md border p-2 hover:bg-gray-100" >
      <MinusIcon className="w-5" />
    </button>
  );
}
  
export function DeleteTracker({ id }: { id: string }) {
  return (
    <button className="rounded-md border p-2 hover:bg-gray-100" >
      <TrashIcon className="w-5" />
    </button>
  );
}
  
export function RenameTracker({ id }: { id: string }) {
  return (
    <button className="rounded-md border p-2 hover:bg-gray-100" >
      <PencilIcon className="w-5" />
    </button>
  );
 }

export function CreateTracker({ id }: { id: string }) {
  return (
    <button className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
        <span>Create Tracker</span>{' '}
    </button>
  );
}
  export function CreateInvoice() {
    return (
      <Link
        href="/dashboard/invoices/create"
        className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span className="hidden md:block">Create Invoice</span>{' '}
        <PlusIcon className="h-5 md:ml-4" />
      </Link>
    );
  }
  
