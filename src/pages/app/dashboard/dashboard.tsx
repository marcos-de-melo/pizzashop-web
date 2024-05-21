import { Helmet } from 'react-helmet-async'

import { DayOrdersAmauntCard } from './day-orders-amaunt-card'
import { MonthCanceledOrdersAmauntCard } from './month-canceled-orders-amount'
import { MonthOrdersAmauntCard } from './month-orders-amount-card'
import { MonthRevenueCard } from './month-revenue-card'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmauntCard />
          <DayOrdersAmauntCard />
          <MonthCanceledOrdersAmauntCard />
        </div>
      </div>
    </>
  )
}
