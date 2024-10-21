"use client";

import { CheckIcon, CopyIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { ShareOptions } from "./utils";
import { useState } from "react";

export function Copy({ url }: Pick<ShareOptions, "url">) {
	const [isCopied, setIsCopied] = useState<boolean>(false);

	async function copyTextToClipboard(text: string) {
		return await window.navigator.clipboard.writeText(text);
	}

	function onClick() {
		copyTextToClipboard(url as string)
			.then(() => {
				setIsCopied(true);
				setTimeout(() => {
					setIsCopied(false);
				}, 1500);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div>
			<Label htmlFor="course-url">Share as a link</Label>
			<div className="flex items-center gap-2">
				<Input
					id="course-url"
					type="text"
					value={url}
					disabled
					aria-disabled
					readOnly
				/>
				<Button
					type="button"
					size={"icon"}
					variant={"outline"}
					className="flex-shrink-0"
					onClick={() => onClick()}
				>
					{isCopied ? (
						<CheckIcon className="text-blue-500" />
					) : (
						<CopyIcon className="text-muted-foreground" />
					)}
				</Button>
			</div>
		</div>
	);
}
