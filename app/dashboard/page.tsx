'use client'

import { Avatar, Badge, Card, Dropdown, Progress, Table } from 'flowbite-react'
import { HiDotsVertical, HiOutlineArrowUp } from 'react-icons/hi'

export default function DashboardPage() {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900">
      {/* Stats Cards */}
      <div className="grid gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <div className="flex justify-between">
            <div>
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white">$45,385</h5>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</p>
            </div>
            <div className="flex items-center text-green-500">
              <HiOutlineArrowUp className="w-4 h-4" />
              <span className="ml-1">12.5%</span>
            </div>
          </div>
        </Card>
        {/* More stat cards... */}
      </div>

      {/* Table */}
      <Card>
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-xl font-bold">Recent Transactions</h5>
          <Dropdown label="" renderTrigger={() => <HiDotsVertical className="w-5 h-5" />}>
            <Dropdown.Item>Last 7 days</Dropdown.Item>
            <Dropdown.Item>Last 30 days</Dropdown.Item>
            <Dropdown.Item>Last 90 days</Dropdown.Item>
          </Dropdown>
        </div>
        
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Transaction</Table.HeadCell>
            <Table.HeadCell>Amount</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row>
              <Table.Cell className="flex items-center">
                <Avatar size="sm" rounded />
                <div className="ml-2">
                  <div className="text-sm font-medium">Payment to Molly Sanders</div>
                  <div className="text-xs text-gray-500">#12345</div>
                </div>
              </Table.Cell>
              <Table.Cell>$320.00</Table.Cell>
              <Table.Cell>
                <Badge color="success">Completed</Badge>
              </Table.Cell>
              <Table.Cell>
                <div className="text-sm">Dec 24, 2023</div>
                <div className="text-xs text-gray-500">6:10 PM</div>
              </Table.Cell>
            </Table.Row>
            {/* More rows... */}
          </Table.Body>
        </Table>
      </Card>

      {/* Progress Cards */}
      <div className="grid gap-4 mt-4 sm:grid-cols-2">
        <Card>
          <h5 className="text-lg font-medium mb-2">Project Status</h5>
          <div className="flex justify-between mb-1">
            <span className="text-sm">Website Redesign</span>
            <span className="text-sm font-medium">45%</span>
          </div>
          <Progress progress={45} size="sm" color="blue" />
        </Card>
        {/* More progress cards... */}
      </div>
    </div>
  )
} 