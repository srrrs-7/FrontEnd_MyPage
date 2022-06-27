import React from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  CursorClickIcon,
  MenuIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  CubeIcon,
  DatabaseIcon,
  CodeIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

const solutions = [
  {
    name: '3D Graphic',
    description: 'Three.js, Blender, UnrealEngine, Unity',
    href: '/three',
    icon: CubeIcon,
  },
  {
    name: 'Node.js',
    description: 'React.js, Next.js',
    href: '/node',
    icon: CodeIcon,
  },
  {
    name: 'GO Language',
    description: 'GinGonic, sqlc',
    href: '/golang',
    icon: CodeIcon,
  },
  {
    name: 'Database',
    description: 'SQL PostgreSQL, Redis',
    href: '/database',
    icon: DatabaseIcon,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  return (
    <div>
      <Popover className='relative bg-gray-300 shadow-lg px-10'>
        <div className='flex justify-between items-center border-b-2 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <a href='#'>
              <span className='sr-only'>Workflow</span>
              <span className='text-3xl font-serif'>sRRRs</span>
            </a>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <Popover.Group as='nav' className='hidden md:flex space-x-10'>
            <Popover className='relative'>
              {({ open }: any) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-gray-300 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                    )}
                  >
                    <span>Work</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500',
                      )}
                      aria-hidden='true'
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
                      <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                            >
                              <item.icon
                                className='flex-shrink-0 h-6 w-6 text-indigo-600'
                                aria-hidden='true'
                              />
                              <div className='ml-4'>
                                <p className='text-base font-medium text-gray-900'>{item.name}</p>
                                <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a href='/blogs' className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Blogs
            </a>
            <a href='/QandA' className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Q&A
            </a>
            <a href='/query' className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Query
            </a>
            <a href='/' className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Home
            </a>
          </Popover.Group>
          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <a
              href='#'
              className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Sign in
            </a>
            <a
              href='#'
              className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
            >
              Sign up
            </a>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default Header;
