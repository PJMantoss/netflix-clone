import React, { useState, useContext, useEffect } from 'react';
import Fuse from 'fuse.js';
import { Card, Header, Loading, Player } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from './Footer';
import { SelectProfileContainer } from './Profiles';

export function BrowseContainer({ slides }){
    //initialize state
    const [category, setCategory] = useState('series')
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [slideRows, setSlideRows] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    const user = {
        displayName: "Carl",
        photoURL: "1"
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [user]);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    //live search implementation
    useEffect(() => {
        const fuse = new Fuse(slideRows, {keys: ['data.description', 'data.title', 'data.genre']});
        const results = fuse.search(searchTerm).map(({ item }) => item);

        if(slideRows.length > 0 && searchTerm.length > 3 && results.length > 0){
            setSlideRows(results);
        }else{
            setSlideRows(slides[category]);
        }
    }, [searchTerm]);

    return profile.displayName ? (
          <>
          {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
          <Header src={process.env.PUBLIC_URL + "joker1"} dontShowOnSmallViewPort>
              <Header.Frame>
                  <Header.Group>
                      <Header.Logo to={ROUTES.BROWSE} src={process.env.PUBLIC_URL + "./images/misc/logo.svg"} alt="Netflix"/>
                      <Header.Link 
                          active={category === 'series' ? 'true' : 'false'} 
                          onClick={() => setCategory('series')}
                       >
                            Series
                       </Header.Link>

                       <Header.Link 
                          active={category === 'films' ? 'true' : 'false'} 
                          onClick={() => setCategory('films')}
                       >
                            Films
                       </Header.Link>
                  </Header.Group>
                  <Header.Group>
                      <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                      <Header.Profile>
                          <Header.Picture src={process.env.PUBLIC_URL + user.photoURL} />
                          <Header.Dropdown>
                              <Header.Group>
                                <Header.Picture src={process.env.PUBLIC_URL + user.photoURL} />
                                <Header.Link>{user.displayName}</Header.Link>
                              </Header.Group>

                              <Header.Group>
                                  <Header.Link onClick={() => firebase.auth().signOut()}>
                                      Sign Out
                                  </Header.Link>
                              </Header.Group>
                          </Header.Dropdown>
                      </Header.Profile>
                  </Header.Group>
              </Header.Frame>

              <Header.Feature>
                  <Header.FeatureCallOut>Watch Joker now!</Header.FeatureCallOut>
                  <Header.Text>
                    Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                    City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                    futile attempt to feel like he's part of the world around him.
                  </Header.Text>
              </Header.Feature>
              <Header.PlayButton>Play</Header.PlayButton>
          </Header>

          <Card.Group>
              {slideRows.map((slideItem) => (
                  <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                      <Card.Title>{slideItem.title}</Card.Title>
                      <Card.Entities>
                          {slideItem.data.map((item) => (
                              <Card.Item key={item.docId} item={item}>
                                  <Card.Image src={process.env.PUBLIC_URL + `/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                  <Card.Meta>
                                      <Card.SubTitle>{item.title}</Card.SubTitle>
                                      <Card.Text>{item.description}</Card.Text>
                                  </Card.Meta>
                              </Card.Item>
                          ))}
                      </Card.Entities>
                      <Card.Feature category={category}>
                          <Player>
                              <Player.Button />
                              <Player.Video />
                          </Player>
                      </Card.Feature>
                  </Card>
              ))}
          </Card.Group>
          <FooterContainer />
          </>) 
          : (<SelectProfileContainer user={user} setProfile={setProfile} />)
}