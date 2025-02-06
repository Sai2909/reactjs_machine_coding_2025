function useCopyToClipboard(content) {
    const [isCopied, setIsCopied] = useState(false);

    const copy = useCallback(() => {
        navigator.clipboard
            .writeText(content)
            .then(() => setIsCopied(true))
            .then(() => setTimeout(() => setIsCopied(false), 1250))
            .catch((err) => alert(err));
    }, [content]);
    return [isCopied, copy];
}

export default function CopyTextCustom() {
    const [isCopied, copy] = useCopyToClipboard("Text to copy!");
    return <button onClick={copy}>{isCopied ? "Copied!" : "Copy"}</button>;
}
