import React from 'react';
import Image from "next/image";
import Navigation from "@/components/Navigation";

const AboutPage: React.FC = () => {
    return (
        <div>
            <Navigation />
            <br id='company_about_us' />
            <br />
            <br />
            <br />
            <div className='pl-28 pr-28 ml-56 mr-56 text-black font-sans'>
                <div>
                    <h1 className='text-3xl mt-12 mb-8'>About Us</h1>
                    <p>
                        NanoRes LLC specializes in the advancement of biomedical technology tailored for
                        super-resolution microscopy. We foster deep collaborations with cell biologists,
                        neuroscientists, and chemists, aiming to unravel pivotal biological mysteries ranging
                        from cytokinesis and epigenetics to neural circuits and cell motility.
                    </p>
                    <br />
                    <p>
                        Our innovation includes the development of a multiplane Single Molecule Localization
                        Microscope, cutting-edge real-time super-resolution image reconstruction software, and
                        a versatile online tool for 3D/2D super-resolution image visualization. Our goal is to
                        democratize access to super-resolution microscopy, making it easily accessible for all
                        interested users.
                    </p>
                </div>

                <br id='company_patent' />
                <br />
                <br />
                <br />
                <div>
                    <h1 className='text-3xl mb-8'>Patents</h1>
                    <ul>
                        <li className='mb-2'>
                            <p className='font-bold'>Highspeed acquisition with highspeed sensor</p>
                            <p className='font-bold'>Imaging Noise Reduction System and Method</p>
                            <p>Fang Huang, Sheng Liu</p>
                            <p>WO2018140900A1</p>
                        </li>
                        <li className='mb-2'>
                            <p className='font-bold'>AI-based real-time analysis for tissue imaging</p>
                            <p>Fang Huang, Peiyi Zhang, Sheng Liu</p>
                            <p>WO2020081125A1</p>
                        </li>
                        <li className='mb-2'>
                            <p className='font-bold'>Artifact free super-resolution tissue imaging</p>
                            <p>Fan Xu, Fang Huang, Donghan Ma</p>
                            <p>WO2021026381A1</p>
                        </li>
                    </ul>
                </div>

                <br id='company_people' />
                <br />
                <br />
                <br />
                <div>
                    <h1 className='text-3xl mt-12 mb-8'>People</h1>

                    <p className='font-bold mb-2'>Fang Huang, Ph.D., Co-founder</p>
                    <div className='flex flex-row items-center'>
                        <div className="basis-1/6">
                            <Image src="/fang_huang.png" alt="Fang Huang" width={200} height={200} />
                        </div>
                        <div className="basis-5/6 pl-12 pr-12">
                            Dr. Huang is Reilly Associate Professor of Biomedical Engineering at Purdue
                            University in the Weldon School of Biomedical Engineering. Fang Huang earned
                            his B.S. in Physics at the University of Science and Technology of China in 2004
                            and his Ph.D. in Physics from the University of New Mexico in 2011 (Advisor:
                            Keith Lidke). Before joining Purdue, Dr. Huang worked with Joerg Bewersdorf as a
                            Postdoctoral Fellow in the Department of Cell Biology at Yale University.
                        </div>
                    </div>

                    <p className='font-bold mt-8 mb-2'>Yilun Li, Ph.D. Candidate, Co-founder</p>
                    <div className='flex flex-row items-center'>
                        <div className="basis-1/6">
                            <Image src="/yilun_li.png" alt="Yilun Li" width={200} height={200} />
                        </div>
                        <div className="basis-5/6 pl-12 pr-12">
                            Yilun is a Ph.D. Candidate (expects to graduate in May 2024) at Purdue University in
                            the Weldon School of Biomedical Engineering. Yilun Li Earned his B.S. in Physics at the
                            University of Science and Technology of China in 2018.
                        </div>
                    </div>

                    <p className='font-bold mt-8 mb-2'>Junwei Zhou, M.S., Co-founder</p>
                    <div className='flex flex-row items-center'>
                        <div className="basis-1/6">
                            <Image src="/junwei_zhou.png" alt="Junwei Zhou" width={200} height={200} />
                        </div>
                        <div className="basis-5/6 pl-12 pr-12">
                            Junwei obtained his Master&apos;s degree in Computer Science from University of Michigan,
                            Ann Arbor in 2023, and obtained his Bachelor&apos;s degree in Computer Science and Geophysics
                            in 2021. He has interned at Amazon and Mechsoft as a software engineer before.
                        </div>
                    </div>

                    <p className='font-bold mt-8 mb-2'>Shengzhi Wu, M.S. Candidate, Co-founder</p>
                    <div className='flex flex-row items-center'>
                        <div className="basis-1/6">
                            <Image src="/shengzhi_wu.png" alt="Shengzhi Wu" width={200} height={200} />
                        </div>
                        <div className="basis-5/6 pl-12 pr-12">
                            Shengzhi Wu is a Master Candidate (expects to graduate in June 2024) at National University of
                            Singapore in Faculty of Science. Shengzhi Wu earned his B.S. in Mathematics at University of
                            Science and Technology of China in 2021. He is experienced in scientific computation, medical
                            image reconstruction, visualization and web development.
                        </div>
                    </div>

                    <p className='font-bold mt-8 mb-2'>Rongkang Xiong, M.S. Candidate, Chief Software Architect</p>
                    <div className='flex flex-row items-center'>
                        <div className="basis-1/6">
                            <Image src="/rongkang_xiong.jpg" alt="Rongkang Xiong" width={200} height={200} />
                        </div>
                        <div className="basis-5/6 pl-12 pr-12">
                            Rongkang Xiong is a Master&apos;s student at the School of Big Data at the University of
                            Science and Technology of China (expected to graduate in May 2025). He obtained his
                            Bachelor&apos;s degree in Physics from the University of Science and Technology of China
                            in 2021. Rongkang has previously served as the head of the Intelligent Customer Service
                            Department at Anhui Province Bidding Group - Youzhicai Company. He is also a co-founder
                            of chatpaper.org and dataten.ai Technology.
                        </div>
                    </div>
                </div>

                <br id='company_contact_us' />
                <br />
                <br />
                <br />
                <div>
                    <h1 className='text-3xl mb-8'>Contact Us</h1>
                    <p>General information: <a href="mailto:info@nanoresolution.com">info@nanoresolution.com</a></p>
                </div>
                <br />
                <br />
            </div>

        </div>
    );
};

export default AboutPage;