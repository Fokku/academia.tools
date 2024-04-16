import { TelegramGroups, columns } from "./columns"
import { DataTable } from "./data-table"
import master_list from "../data/master_list.json"
import Navbar from "./components/Navbar"

function getData(): TelegramGroups[] {
  return master_list
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div>
      <Navbar/>
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
    </div>
  )
}
