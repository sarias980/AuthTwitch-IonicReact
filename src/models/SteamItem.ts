type StreamItem = {
    _id: number;
    game: string;
    stream_type: string;
    preview: {
        large: string,
        medium: string,
        small: string,
    };
    created_at: string;
};

export default StreamItem;