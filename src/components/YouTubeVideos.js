import React from 'react';

const videos = [
  {
    id: 1,
    embedId: '_8QQlOT-69o',
    // title: 'Awesome Project Demo',
  },
  {
    id: 2,
    embedId: 'bMhxaY6mBSo',
    // title: 'Cool Feature Showcase',
  },
];

const YouTubeVideos = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">My YouTube Videos</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative pb-[50%]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-3">
                {/* <h3 className="text-2xl font-semibold mb-4">{video.title}</h3> */}
                <a
                  href={`https://youtu.be/${video.embedId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline text-lg font-medium"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;

