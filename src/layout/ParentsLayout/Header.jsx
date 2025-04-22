import React from 'react';
import ProfileSection from './ProfileSection';
import useStore from '@/store';
import { Select, SelectTrigger, SelectContent, SelectGroup, SelectLabel, SelectItem, SelectValue } from '@/components/ui/select';
import { Bell } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu';
import { DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from '@/components/ui/dropdown-menu';

const Header = () => {
  const { userData, schoolData } = useStore();
  return (
    <header className="flex justify-between items-center w-full py-4 px-5 z-200">
      <div className="flex items-center">
        <img src={schoolData ? schoolData.logoUrl : '/favicon-16x16.png'} alt="EduSoftHub" className="w-8 h-8" />
        <a href="/parents/dashboard" className=" mx-4 text-xl font-bold text-primary">{schoolData ? schoolData.name : "EduSoftHub"}</a>
      </div>
      <div className="flex items-center flex-row gap-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Child" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent >
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Notification 1
              </DropdownMenuItem>
              <DropdownMenuItem>
                Notification 2
              </DropdownMenuItem>
              <DropdownMenuItem>
                Notification 3
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Show All
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
        <ProfileSection userData={userData} />
      </div>
    </header>
  )
}

export default Header