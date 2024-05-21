import React from 'react'

function About() {
    return (
        <div>
            <div className='w-[80%] m-auto'>
                <h1 className='text-3xl text-center'>About Page</h1>
                <br />
                <div className='shadow-lg px-5'>

                    <p className='text-lg'>Analyse your text <br /><br /> <span className='font-semibold'>Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable.</span></p>
                </div>
                <br />
                <br />
                <div className='shadow-lg px-5'>

                    <p className='text-lg'>Free to Use <br /><br /> <span className='font-semibold'>TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit.</span></p>
                </div>
                <br />
                <br />
                <div className='shadow-lg px-5'>

                    <p className='text-lg'>Browser Compatability<br /><br /> <span className='font-semibold'>This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc</span></p>
                </div>
                <br />
                <br />
            </div>

        </div>
    )
}

export default About
