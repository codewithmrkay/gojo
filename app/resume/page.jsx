import React from 'react'

const page = () => {
    return (
        <div>
            <div className="w-full h-screen bg-black">
                <iframe
                    src="/resume/kk_dev_resume.pdf"
                    className="w-full h-full"
                    title="Resume"
                />
            </div>
        </div>
    )
}

export default page