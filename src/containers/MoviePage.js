import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Icon, Loader, Container } from 'semantic-ui-react'
import InfiniteScroll from 'react-infinite-scroller'

import { getMovieAction, loadMoreMovies } from '../actions/movieActions'
import Search from '../components/Search'

class MoviePage extends Component{
    componentDidMount() {
        if(this.props.movies.length === 0){
                   this.props.dispatch(getMovieAction())
        }
    }
    loadMoreMovies(pageIndex){
        var self = this
        setTimeout(function(){
            self.props.dispatch(loadMoreMovies(pageIndex))
        },2000)        
    }
    render(){
        return (
            <div>
                <Search />
                <InfiniteScroll className="ui cards" style={{margin: '10px auto'}}
                    pageStart={0}
                    loadMore={this.loadMoreMovies.bind(this)}
                    hasMore={this.props.hasMore}
                    loader={<Loader active inline='centered' />}>
                    {this.props.movies.map((movie,i)=>(
                        <Card key={i} color='purple'  onClick={()=> window.open(`${movie.imdbLink}`, "_blank") }>
                            <Card.Content>
                                <Card.Header>{movie.title} {movie.year && `(${movie.year})`}</Card.Header>
                                <Card.Meta>{movie.language}</Card.Meta>
                                <Card.Description><b>Directed By</b>: {movie.director}</Card.Description>
                                <Card.Description><b>Actors</b>: {movie.firstActor}, {movie.secondActor}</Card.Description>             
                            </Card.Content>
                            <Card.Content extra>
                                    <Icon name='tag' />
                                    {movie.genres.join(' | ')}
                            </Card.Content>
                        </Card>
                    ))}
                </InfiniteScroll>           
            </div>
        )
    }
}
export default connect(({movies: {displayedMovies, pageIndex,pageSize, totalPages}})=>({
    movies: displayedMovies,
    pageIndex,
    hasMore: totalPages > (pageIndex + 1) 
}),null)(MoviePage)