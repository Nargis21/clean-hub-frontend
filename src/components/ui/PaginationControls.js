'use client'

import { Button } from 'antd'
import { useRouter, useSearchParams } from 'next/navigation'
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons"

const PaginationControls = (
    {
        hasNextPage,
        hasPrevPage,
        totalData
    }
) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ?? '1'
    const per_page = searchParams.get('per_page') ?? '6'

    return (
        <div className='pb-16 bg-sky-900 text-white'>
            <div className='flex gap-2 justify-center items-center'>
                <Button
                    className='text-white'
                    type='primary'
                    disabled={!hasPrevPage}
                    onClick={() => {
                        router.push(`services/?page=${Number(page) - 1}&per_page=${per_page}`)
                    }}>
                    <DoubleLeftOutlined />Previous
                </Button>

                <div>
                    {page} / {Math.ceil(totalData / Number(per_page))}
                </div>

                <Button
                    className='text-white'
                    type='primary'
                    disabled={!hasNextPage}
                    onClick={() => {
                        router.push(`services/?page=${Number(page) + 1}&per_page=${per_page}`)
                    }}>
                    Next<DoubleRightOutlined />
                </Button>
            </div>
        </div>
    )
}

export default PaginationControls