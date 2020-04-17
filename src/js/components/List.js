//List component
// Base list UI component

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import ApartmentIcon from "@material-ui/icons/Apartment";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    //maxWidth: 450,
    backgroundColor: theme.palette.background.paper
  }
}));

function CustomAvatar({name}){
	let icon;
	if(name=='person'){
		icon = <PersonIcon />
	}
	else{
		icon = <ApartmentIcon />
	}
	return(
		<ListItemAvatar>
          <Avatar>
            {icon}
          </Avatar>
        </ListItemAvatar>
	);
}

function CustomerItem({data}){
  	const classes = useStyles();

	return(
		<ListItemText 
        	primary={data.name} 
        	secondary={
        		<React.Fragment>
	              <Typography
	                component="span"
	                variant="body2"
	                className={classes.inline}
	                color="textSecondary"
	              >
	                ID#: {data.customerId}
	              </Typography>
	              <br/>
	              <Typography
	                component="span"
	                variant="body2"
	                className={classes.inline}
	                color="textSecondary">
	                <strong>Age:</strong>{data.age}  <strong>Gender:</strong>{data.gender}
	              </Typography>
	            </React.Fragment>
        	} 
    	/>
	);
}

function AddressItem({data}){
  	const classes = useStyles();

	return(
		<ListItemText 
        	primary={data.address1 + ', ' + data.address2} 
        	secondary={
        		<React.Fragment>
	              <Typography
	                component="span"
	                variant="body2"
	                className={classes.inline}
	                color="textSecondary"
	              >
	                {data.city}, {data.state}-{data.zipcode}
	              </Typography>
	              <br/>
	              <Typography
	                component="span"
	                variant="body2"
	                className={classes.inline}
	                color="textSecondary">
	                <strong>{data.country}</strong>
	              </Typography>
	            </React.Fragment>
        	} 
    	/>
	);
}

export default function FolderList({items, handler, type}) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleListItemClick = (event, index, customerId) => {
    setSelectedIndex(index);
    handler(customerId);
  };

  return(
  	<div>
  		{items.length==0 && <span><br/>No records found</span>}
	  	<List className={classes.root}>
	        {	
	        	type=='customer' ?
	        	(items.map( (el, index) => (
		          <ListItem key={el.customerId}
			        button
			        selected={selectedIndex === index}
			        onClick={event => handleListItemClick(event, index, el._id)}>

			        <CustomAvatar name="person" />
			        <CustomerItem data={el} />
			      </ListItem>
	        	)))
	        	:
	        	(
	        	items.map( (el, index) => (
		          <ListItem key={index}
			        button
			        >
			        <CustomAvatar />
			        <AddressItem data={el} />
			      </ListItem>
	        	))
	        	)
	    	}
	     </List>
    </div> 
  );

}

