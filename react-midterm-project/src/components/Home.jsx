import { Card, Row, Col, Input } from 'antd';
import movies from '../data/movies';

const Home = ({ onMovieClick }) => {
    const featured = movies[0];

    return (
        <div style={{ background: '#192026', minHeight: '100vh', color: 'white' }}>
            <div style={{
                background: '#192026',
                padding: '16px 40px',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                gap: 40,
            }}>
                <div style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>Anonime</div>
                <div style={{ flex: 1, display: 'flex', gap: 32 }}>
                    <a href="#" style={{ color: '#bbbbbb', textDecoration: 'none' }}>Home</a>
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
            </div>

            <div style={{ padding: '16px 40px 12px', maxWidth: 1400, margin: '0 auto', textAlign: 'left' }}>
                <h2 style={{ fontSize: 28, marginBottom: 8, color: 'white' }}>Explore</h2>
                <h3 style={{ fontSize: 18, margin: 0, color: '#dddddd' }}>What are you gonna watch today?</h3>
            </div>

            <div style={{ padding: '16px 40px' }}>
                <div style={{
                    maxWidth: 1400,
                    margin: '0 auto',
                    borderRadius: 20,
                    overflow: 'hidden',
                    height: 520,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                }}>
                    <div style={{
                        height: '100%',
                        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${featured.image}) center/cover`,
                        display: 'flex',
                        alignItems: 'flex-end',
                        paddingBottom: 80,
                    }}>
                        <div style={{ padding: '0 40px', width: '100%', textAlign: 'left' }}>
                            <h1 style={{ fontSize: 48, marginBottom: 24 }}>{featured.movieName}</h1>
                            <p style={{ maxWidth: 600, fontSize: 18, lineHeight: 1.6 }}>
                                {featured.description.substring(0, 250) + '...'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ padding: '24px', maxWidth: 1400, margin: '0 auto' }}>
                <h2 style={{ fontSize: 28, marginBottom: 24, textAlign: 'left' }}>New Release</h2>
                <Row gutter={[24, 32]}>
                    {movies.slice(1).map(movie => (
                        <Col xs={12} sm={8} md={6} lg={4} key={movie.id}>
                            <Card
                                hoverable
                                cover={
                                    <img
                                        alt={movie.movieName}
                                        src={movie.image || 'https://via.placeholder.com/300x450?text=No+Image'}
                                        style={{
                                            height: 320,
                                            objectFit: 'cover',
                                            borderRadius: '8px 8px 0 0',
                                        }}
                                    />
                                }
                                onClick={() => onMovieClick(movie)}
                                style={{
                                    background: '#1f1f1f',
                                    border: 'none',
                                    borderRadius: 12,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Card.Meta
                                    title={<div style={{ color: 'white', fontSize: 14 }}>Episode {movie.episode}</div>}
                                    description={
                                        <div style={{
                                            color: 'white',
                                            fontSize: 16,
                                            lineHeight: 1.4,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical'
                                        }}>
                                            {movie.movieName}
                                        </div>
                                    }
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Home;