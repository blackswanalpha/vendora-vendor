import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Users, MessageSquare, Share2 } from "lucide-react";

const LiveStream = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Live Stream</h2>
          <p className="text-muted-foreground">
            Connect with your audience in real-time
          </p>
        </div>
        <Button className="gap-2">
          <Video className="h-4 w-4" />
          Go Live
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Stream Preview</CardTitle>
            </CardHeader>
            <CardContent className="aspect-video bg-muted flex items-center justify-center">
              <Video className="h-12 w-12 text-muted-foreground" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stream Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <label className="text-sm font-medium">Stream Title</label>
                  <input
                    type="text"
                    className="w-full mt-1 p-2 rounded-md border"
                    placeholder="Enter stream title"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <textarea
                    className="w-full mt-1 p-2 rounded-md border"
                    rows={3}
                    placeholder="Describe your stream"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Stream Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Viewers</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MessageSquare className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Chat Messages</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Share2 className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Shares</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Live Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                Chat messages will appear here
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
