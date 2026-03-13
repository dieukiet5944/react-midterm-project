import { Input, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const AnimeDetails = ({ movie, movies, onMovieClick, onBack }) => {
    if (!movie) {
        return <div style={{ padding: 40, color: 'red' }}>No movie selected</div>;
    }

    const popularMovies = movies.filter(m => m.id !== movie.id).slice(0, 6);

    return (
        <div style={{ background: '#192026', minHeight: '100vh', color: '#e6e6e6' }}>
            <header style={{
                background: '#192026',
                padding: '16px 40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                borderBottom: '1px solid #1f1f1f',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
            }}>
                <div style={{ fontSize: 32, fontWeight: 'bold', color: 'white', cursor: 'pointer' }} onClick={onBack}>
                    Anonime
                </div>
                <div style={{ flex: 1, display: 'flex', gap: 32, marginLeft: 40 }}>
                    <a href="#" onClick={onBack} style={{ color: '#bbbbbb', textDecoration: 'none' }}>Home</a>
                    <a href="#" style={{ color: '#bbbbbb', textDecoration: 'none' }}>List anime</a>
                </div>
                <Input
                    placeholder="Search anime or movie"
                    allowClear={false}
                    bordered={false}
                    style={{
                        width: 374,
                        height: 48,
                        borderRadius: 999,
                        background: '#374151',
                        color: '#868686',
                        paddingLeft: 16,
                    }}
                />
            </header>

            <div style={{ padding: '40px 40px 80px', maxWidth: 1400, margin: '0 auto' }}>
                <Row gutter={32} align="top">
                    <Col xs={24} lg={16}>
                        <Title level={2} style={{ color: '#fff', marginBottom: 24, fontSize: 36, textAlign: 'left' }}>
                            {movie.movieName} - Episode {movie.episode}
                        </Title>

                        <div style={{ position: 'relative', marginBottom: 40 }}>
                            <div style={{
                                background: '#000',
                                borderRadius: 12,
                                overflow: 'hidden',
                                aspectRatio: '16 / 9',
                                maxHeight: 480,
                            }}>
                                <img
                                    src={movie.image || 'https://via.placeholder.com/800x450?text=No+Poster'}
                                    alt={movie.movieName}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        opacity: 0.4,
                                    }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 80,
                                        color: '#fff',
                                        cursor: 'pointer',
                                        opacity: 0.85,
                                    }}
                                    onClick={() => alert('Play video – feature coming soon')}
                                >
                                    ▶
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', marginTop: 32 }}>
                            <img
                                src={movie.image || 'https://via.placeholder.com/220x320?text=Poster'}
                                alt={movie.movieName}
                                style={{
                                    width: 220,
                                    borderRadius: 12,
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
                                }}
                            />
                            <div style={{ flex: 1, minWidth: 300, textAlign: 'left' }}>
                                <div style={{ marginBottom: 32 }}>
                                    <div style={{ marginBottom: 8 }}>
                                        <div style={{ color: 'white', fontWeight: 'bold' }}>Type:</div>
                                        <div>{movie.type || 'TV'}</div>
                                    </div>
                                    <div style={{ marginBottom: 8 }}>
                                        <div style={{ color: 'white', fontWeight: 'bold' }}>Status:</div>
                                        <div>{movie.status || 'Ongoing'}</div>
                                    </div>
                                    <div style={{ marginBottom: 8 }}>
                                        <div style={{ color: 'white', fontWeight: 'bold' }}>Studios:</div>
                                        <div>{movie.studios || 'Toei Animation'}</div>
                                    </div>
                                    <div style={{ marginBottom: 8 }}>
                                        <div style={{ color: 'white', fontWeight: 'bold' }}>Duration:</div>
                                        <div>{movie.duration || '24 Min.'}</div>
                                    </div>
                                    <div>
                                        <div style={{ color: 'white', fontWeight: 'bold' }}>Genres:</div>
                                        <div>{movie.genres?.join(', ') || 'Action, Adventure, Fantasy'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Title level={4} style={{ color: '#ff4d4d', margin: '24px 0 16px', textAlign: 'left' }}>
                                Synopsis:
                            </Title>
                            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#ddd', textAlign: 'left', margin: 0 }}>
                                {movie.description || 'No synopsis available for this anime.'}
                            </p>
                        </div>
                    </Col>

                    <Col xs={24} lg={8}>
                        <Title level={3} style={{ color: '#aaa', marginBottom: 28, fontSize: 30 }}>
                            Popular Anime
                        </Title>
                        <Row gutter={[16, 16]}>
                            {popularMovies.map(m => (
                                <Col xs={12} sm={12} key={m.id}>
                                    <div
                                        onClick={() => onMovieClick(m)}
                                        style={{
                                            cursor: 'pointer',
                                            transition: 'transform 0.2s',
                                            borderRadius: 12,
                                            overflow: 'hidden',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                        <img
                                            src={m.image || 'https://via.placeholder.com/160x220?text=No+Img'}
                                            alt={m.movieName}
                                            style={{
                                                width: '100%',
                                                height: 250,
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AnimeDetails;