import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles/index';
import {FusePageSimple} from '@fuse/index';
import {Typography} from 'material-ui';
import yellow from 'material-ui/colors/yellow';
import {FuseHighlight} from '@fuse';

const styles = theme => ({
    layoutRoot: {},
    note      : {
        border         : '1px solid ' + yellow[500],
        backgroundColor: yellow[200],
        color          : theme.palette.getContrastText(yellow[200]),
        padding        : 16
    }
});

class WorkingWithFuseDoc extends Component {

    render()
    {
        const {classes} = this.props;

        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="flex flex-1 items-center justify-between p-24">
                        <Typography variant="title">Installation</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="text-32 mb-8" component="h2">Working with Fuse</Typography>

                        <Typography className="mb-16" component="p">
                            While still in your work folder, run the following command in the console application:
                        </Typography>

                        <Typography className="mb-16" component="p">
                            And that's it. Angular CLI will take care everything and start the Fuse.
                        </Typography>

                        <Typography className="mb-16" component="p">
                            You can check out your console application to get further information about the server. By default, it will run on <b>http://localhost:300</b> but it
                            might
                            change depending on your setup.
                        </Typography>

                        <FuseHighlight component="pre" className="language-cmd my-16">
                            {`
                              yarn start
                            `}
                        </FuseHighlight>

                        <Typography className="text-32 mb-8" component="h2">Production</Typography>

                        <FuseHighlight component="pre" className="language-cmd my-16">
                            {`
                              yarn run build
                            `}
                        </FuseHighlight>

                        <Typography className="mb-16" component="p">
                            compiles the application into <code className="language-cmd">/build</code> directory
                        </Typography>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(WorkingWithFuseDoc);
