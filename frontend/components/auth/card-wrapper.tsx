"use client"

import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";
import { 
    Card,
    CardContent,
    CardHeader,
    CardFooter
 } from "@/components/ui/card";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backbuttonLabel: string;
    backbuttonHref: string;
    showSocical?: boolean;   
}

export  const CardWrapper = ({
    children,
    headerLabel,
    backbuttonLabel,
    backbuttonHref,
    showSocical,
}:CardWrapperProps) =>{
    return(
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}  
            </CardContent>
            {
                showSocical && (
                    <CardFooter>
                        <Social>

                        </Social>
                    </CardFooter>
                )
            }
            <CardFooter>
                <BackButton
                    label={backbuttonLabel}
                    href={backbuttonHref}
                />
            </CardFooter>
        </Card>
    )
}