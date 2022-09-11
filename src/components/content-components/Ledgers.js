import React from 'react'
import { useMemo,useState,useEffect } from 'react'
import Style from "./../modules/Ledgers.module.css"
import { Button, ButtonGroup, OverlayTrigger, Table, Tooltip } from "react-bootstrap"
import MOCK_DATA from "./../assets/MOCK_DATA.json"
import { COLUMNS } from "./../utils/Columns.js"
import { useFilters, useGlobalFilter, usePagination, useTable, useSortBy } from 'react-table'
import { useSticky } from 'react-table-sticky'
import { Styles } from "./../utils/TableStyles"

import { GlobalFilter } from "./../utils/GlobalFilter"
import axios from 'axios'

export function Ledgers() {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  async function postData() {
    console.log("Post Data Test function called");

    try {
     await axios.post("http://localhost:3001/postdata","some data from frontend");
    }catch(error) {
      console.log(error)
    }
  }


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useSticky,
    usePagination
  )

  const { pageIndex, pageSize, globalFilter } = state

  var testVal,setTestVal = useState({});

  return (
    <>
      <div>
        <Styles>
          <Table {...getTableProps()} className='table sticky'>
            <thead className='header'>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} className='body'>
              {page.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <div className={Style.tablebtndiv}>
            <ButtonGroup>
              <OverlayTrigger key='top'
                placement='top'
                overlay={
                  <Tooltip>
                    Go to First Page
                  </Tooltip>
                }>
                <Button variant='secondary' onClick={() => gotoPage(0)} disabled={!canPreviousPage} >{'First'}</Button>
              </OverlayTrigger>
              <OverlayTrigger key='top'
                placement='top'
                overlay={
                  <Tooltip>
                    Go to Previous Page
                  </Tooltip>
                }>
                <Button variant='secondary' onClick={() => previousPage()} disabled={!canPreviousPage}>{'Previous'}</Button>
              </OverlayTrigger>
              <OverlayTrigger key='top'
                placement='top'
                overlay={
                  <Tooltip>
                    Go to Next Page
                  </Tooltip>
                }>
                <Button variant='secondary' onClick={() => nextPage()} disabled={!canNextPage}>{'Next'}</Button>
              </OverlayTrigger>
              <OverlayTrigger key='top'
                placement='top'
                overlay={
                  <Tooltip>
                    Go to Last Page
                  </Tooltip>
                }>
                <Button variant='secondary' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'Last'}</Button>
              </OverlayTrigger>
            </ButtonGroup>

            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <span>
              | Go to page:{' '}
              <input
                type='number'
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(pageNumber)
                }}
                style={{ width: '50px' }}
              />
            </span>{' '}
            <select
              value={pageSize}
              onChange={e => setPageSize(Number(e.target.value))}>
              {[10, 15, 20, 30, 50, 100].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </Styles>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <div>
          <OverlayTrigger
            placement='right'
            overlay={
              <Tooltip>
                Insert new data row
              </Tooltip>
            }>
            <Button variant='secondary'>Add Data</Button>
          </OverlayTrigger>
        </div>
      </div>

      <Button variant='primary' onClick={(event)=>{
        console.log("Add Data Clicked");
        postData();
      }}>Sample Add Data</Button>
    </>
  )
}
