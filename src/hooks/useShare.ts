import { useToast } from '@/hooks/use-toast';

export function useShare() {
  const { toast } = useToast();

  const shareItem = async (item: any, type: 'destination' | 'ship' | 'expedition') => {
    const shareData = {
      title: `Check out ${item.name} - Wanderlust Explorer`,
      text: `Discover ${item.name}: ${item.description}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast({
          title: "Shared Successfully",
          description: `${item.name} has been shared.`,
        });
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(
          `${shareData.title}\n${shareData.text}\n${shareData.url}`
        );
        toast({
          title: "Link Copied",
          description: "Share link has been copied to your clipboard.",
        });
      }
    } catch (error) {
      // Fallback for browsers without clipboard API
      const shareText = `${shareData.title}\n${shareData.text}\n${shareData.url}`;
      const textArea = document.createElement('textarea');
      textArea.value = shareText;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        toast({
          title: "Link Copied",
          description: "Share link has been copied to your clipboard.",
        });
      } catch (err) {
        toast({
          title: "Share Failed",
          description: "Unable to share. Please copy the URL manually.",
          variant: "destructive",
        });
      }
      document.body.removeChild(textArea);
    }
  };

  return { shareItem };
}