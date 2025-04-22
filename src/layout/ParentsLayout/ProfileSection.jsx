import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuLabel, DropdownMenuGroup, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';

const ProfileSection = ({ userData }) => {

    return (
        <React.Fragment>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="flex items-center">
                        <Avatar>
                            <AvatarImage src={userData.url} alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="ml-2 hidden md:block">
                            <div className="text-sm font-semibold">{userData?.name}</div>
                            <div className="text-xs text-gray-500">{userData?.email}</div>

                        </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" w-40">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Profile
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>

                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Settings
                            <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link to="/logout">Logout</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </React.Fragment>

    )
}

export default ProfileSection