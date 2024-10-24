import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { MailIcon, Share2Icon } from "lucide-react";

import { Copy } from "./copy";
import { Icons } from "@/components/ui/icons";
import { ShareOptions } from "./utils";
import { Social } from "./social";
import { baseUrl } from "@/utils/metadata";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function Share({ title, url }: ShareOptions) {
	return (
		<Dialog>
			<DialogTrigger
				className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
			>
				<Share2Icon className="text-muted-foreground" />
				Share this post
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Share post &mdash; {title}</DialogTitle>
					<DialogDescription>
						Sharing this post goes a long way. Share with family, friends,
						collegues, and others.
					</DialogDescription>
				</DialogHeader>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					<div className="col-span-1 md:col-span-4">
						<Copy url={`${baseUrl}${url}`} />
					</div>
					<Social
						title="Share on Twitter"
						url={"#"}
					>
						<Icons.Twitter className="size-7 flex-shrink-0 invert" />
					</Social>
					<Social
						title="Share on Facebook"
						url={"#"}
					>
						<Icons.Facebook className="size-8 flex-shrink-0" />
					</Social>
					<Social
						title="Share on LinkedIn"
						url={"#"}
					>
						<Icons.LinkedIn className="size-8 flex-shrink-0" />
					</Social>
					<Social
						title="Share on Instagram"
						url={"#"}
					>
						<Icons.Instagram className="size-8 invert flex-shrink-0" />
					</Social>
					<Social
						title="Share by Mail"
						url={"#"}
					>
						<MailIcon className="size-8 flex-shrink-0 text-muted-foreground" />
					</Social>
				</div>
			</DialogContent>
		</Dialog>
	);
}
