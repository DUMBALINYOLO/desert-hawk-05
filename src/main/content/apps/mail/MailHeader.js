import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles/index';
import {Hidden, Icon, IconButton, Input, MuiThemeProvider, Paper} from 'material-ui';
import * as Actions from './store/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {FuseThemes} from '@fuse';

const styles = theme => ({
    root         : {
        display: 'flex',
        flex   : '1'
    },
    searchWrapper: {
        width     : '100%',
        height    : 56,
        padding   : 18,
        display   : 'flex',
        alignItems: 'center'
    },
    search       : {
        paddingLeft: 16
    }
});

class MailHeader extends Component {

    render()
    {
        const {classes, setSearchText, searchText, pageLayout, selectedTheme} = this.props;
        return (
            <MuiThemeProvider theme={FuseThemes[selectedTheme]}>
                <div className={classes.root}>
                    <Paper className={classes.searchWrapper} elevation={7} square>
                        <Hidden lgUp>
                            <IconButton onClick={(ev) => pageLayout().toggleLeftSidebar()}
                                        aria-label="open left sidebar">
                                <Icon>menu</Icon>
                            </IconButton>
                        </Hidden>

                        <Icon color="action">search</Icon>

                        <Input
                            placeholder="Search"
                            className={classes.search}
                            disableUnderline
                            fullWidth
                            value={searchText}
                            inputProps={{
                                'aria-label': 'Search'
                            }}
                            onChange={setSearchText}
                        />
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        setSearchText: Actions.setSearchText
    }, dispatch);
}

function mapStateToProps({mailApp, fuse})
{
    return {
        selectedTheme: fuse.settings.theme,
        searchText   : mailApp.mails.searchText
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(MailHeader));
