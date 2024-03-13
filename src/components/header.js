import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logoImage from '../components/images/logo.png'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-16 w-auto" src={logoImage} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#about" className="text-base font-semibold leading-6 text-gray-900 hover:text-lg hover:text-blue-950 transition">
            About
          </a>
          <a href="#projects" className="text-base font-semibold leading-6 text-gray-900 hover:text-lg hover:text-blue-950 transition">
            Projects
          </a>
          <a href="#skills" className="text-base font-semibold leading-6 text-gray-900 hover:text-lg hover:text-blue-950 transition">
            Skills
          </a>
          <a href="#experience" className="text-base font-semibold leading-6 text-gray-900 hover:text-lg hover:text-blue-950 transition">
            Experience
          </a>
          <a href="#contact" className="text-base font-semibold leading-6 text-gray-900 hover:text-lg hover:text-blue-950 transition">
          Contact
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-transparent backdrop-blur-3xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-16 w-auto"
                src={logoImage}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-bold font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-bold font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="-mx-3 block rounded-lg px-3 py-2 text-bold font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Skills
                </a>
                <a
                  href="#experience"
                  className="-mx-3 block rounded-lg px-3 py-2 text-bold font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Experience
                </a>
                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-bold font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
