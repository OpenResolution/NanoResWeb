import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const items: MenuProps['items'] = [
    {
      label: (
        <Link href="/"> Products </Link>
      ),
      key: 'products',
      children: [
        {
          label: 'Coming Soon',
          key: 'coming_soon'
        }
      ]
    },
    {
      label: (
        <Link href="/"> Technology </Link>
      ),
      key: 'technology',
      children: [
        {
          label: 'SMLM',
          key: 'smlm'
        },
        {
          label: '3D Deep Tissue Imaging',
          key: '3d_tissue'
        },
        {
          label: 'AI Aberrations Correction',
          key: 'ai_aberration_correction'
        },
      ]
    },
    {
      label: (
        <Link href="/"> Exhibition </Link>
      ),
      key: 'exhibition',
    },
    {
      label: (
        <Link href="/"> Tutorials </Link>
      ),
      key: 'tutorials',
      children: [
        {
          label: 'Instrument Usage Guide',
          key: 'instrument_guide'
        },
        {
          label: 'Software Usage Guide',
          key: 'software_guide'
        },
        {
          label: 'Sample Preparation Guide',
          key: 'sample_guide'
        },
      ]
    },
    {
      label: (
        <Link href="/company_info"> Company </Link>
      ),
      key: 'company',
      children: [
        {
          label: <Link href="/company_info#company_about_us"> About Us </Link>,
          key: 'about_us'
        },
        {
          label: <Link href="/company_info#company_patent"> Patent </Link>,
          key: 'patent'
        },
        {
          label: <Link href="/company_info#company_people"> People </Link>,
          key: 'people'
        },
        {
          label: <Link href="/company_info#company_contact_us"> Contact Us </Link>,
          key: 'contact_us'
        },
      ]
    },
    {
      label: (
        <Link href="/"> Program </Link>
      ),
      key: 'program',
      children: [
        {
          label: '2D Reconstruction',
          key: '2d_reconstruction',
        },
        {
          label: '3D Reconstruction',
          key: '3d_reconstruction'
        },
      ]
    },
  ];

  const [current, setCurrent] = React.useState('');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <div className="flex items-center fixed top-0 left-0 w-full z-50 bg-black">
    <Link
      className="flex align items-center justify-center text-4xl"
      href="/"
    >
      <Image src="/logo.png" alt="SMLM Logo" width={100} height={100} />
    </Link>
    <Menu className="w-full bg-black text-lg" theme='dark' onClick={onClick}
      selectedKeys={[current]} mode="horizontal" items={items} />

    <div className="p-4 flex align items-center justify-center">
      <div className="border-2 px-[1em] py-[0.5em]">
        <Link href="/panel"> Panel </Link>
      </div>
    </div>
  </div>
};
