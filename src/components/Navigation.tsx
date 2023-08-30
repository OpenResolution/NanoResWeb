import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

export default function Navigation() {
  const items: MenuProps['items'] = [
    {
      label: (
        <a href="/" target="_blank" rel="noopener noreferrer">
          Products
        </a>
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
        <a href="/" target="_blank" rel="noopener noreferrer">
          Technology
        </a>
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
        <a href="/" target="_blank" rel="noopener noreferrer">
          Exhibition
        </a>
      ),
      key: 'exhibition',
    },
    {
      label: (
        <a href="/" target="_blank" rel="noopener noreferrer">
          Tutorials
        </a>
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
        <a href="/" target="_blank" rel="noopener noreferrer">
          Company
        </a>
      ),
      key: 'company',
      children: [
        {
          label: 'About Us',
          key: 'about_us'
        },
        {
          label: 'Patent',
          key: 'patent'
        },
        {
          label: 'People',
          key: 'people'
        },
        {
          label: 'Contact Us',
          key: 'contact_us'
        },
      ]
    },
    {
      label: (
        <a href="/" target="_blank" rel="noopener noreferrer">
          Program
        </a>
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

  return <Menu className="w-full bg-black text-lg" theme='dark' onClick={onClick}
    selectedKeys={[current]} mode="horizontal" items={items} />;

};
