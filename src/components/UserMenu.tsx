
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from '@/hooks/useAuth';
import { LogIn, UserRound } from 'lucide-react';

const UserMenu = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  if (!user) {
    return (
      <Link to="/login">
        <Button variant="outline" className="border-kitopanto-blue text-kitopanto-blue hover:bg-kitopanto-blue hover:text-white">
          <LogIn className="mr-2 h-4 w-4" />
          Masuk
        </Button>
      </Link>
    );
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="border-kitopanto-blue text-kitopanto-blue hover:bg-kitopanto-blue hover:text-white"
        >
          <UserRound className="mr-2 h-4 w-4" />
          {user.email?.split('@')[0] || 'Akun Saya'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem disabled className="text-sm text-muted-foreground">
          Masuk sebagai: {user.email}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/profil" className="w-full cursor-pointer">
            Profil Saya
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/pesanan" className="w-full cursor-pointer">
            Pesanan Saya
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={async () => {
            await logout();
            setOpen(false);
          }}
          className="text-red-500 hover:text-red-600 focus:text-red-600 cursor-pointer"
        >
          Keluar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
