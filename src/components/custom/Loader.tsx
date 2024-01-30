import { RotateCw } from 'lucide-react'

export const Loader = ({ type }: { type: "THUMB" | "PDF" }) => {
    return (
        <div className='h-full p-1 w-full flex items-center justify-center'>
            <div className="flex gap-2">
                <RotateCw className='animate-spin' />
                Loading {type === 'THUMB' ? "Thumbnail" : "PDF"}...
            </div>
        </div>
    )
}
