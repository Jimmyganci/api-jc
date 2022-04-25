# Front JC

Welcome on the back api of JC

If you want to get this repo in local you can:

<pre>git clone git@github.com:Jimmyganci/api-jc.git</pre>
<pre>npm install</pre>

Create .env from .env.sample and change the credentials mysql, and put your secret api key

<pre>npm start</pre>

# Data

## Links

### Get all links

<pre>/links</pre>

-   Result:

<pre>
[
    {
        "id": 11,
        "title": string,
        "url": string,
        "idTheme": number,
        "active": boolean,
        "createdAt": datetime,
        "updatedAt": datetime
    },
    {
        "id": 12,
        "title": string,
        "url": string,
        "idTheme": number,
        "active": boolean,
        "createdAt": datetime,
        "updatedAt": datetime
    },
	...
]
</pre>

### Get one link

<pre>/links/:id</pre>

Exemple:

<pre>/links/11</pre>

-   Result:

<pre>
    {
        "id": 11,
        "title": string,
        "url": string,
        "idTheme": number,
        "active": boolean,
        "createdAt": datetime,
        "updatedAt": datetime
    }
</pre>

### Create link

<pre>/links</pre>

-   Result:

<pre>
{
    "data": {
        "id": number,
        "title": string,
        "url": string,
        "idTheme": number,
        "active": boolean,
        "updatedAt": string,
        "createdAt": string
    },
    "message": "New link has been created."
}
</pre>

### Update one link

<pre>/links/:id</pre>

Exemple:

<pre>/links/11</pre>

-   Result:

<pre>
    link updated
</pre>

### Delete one link

<pre>/links/:id</pre>

Exemple:

<pre>/links/11</pre>

-   Result:

<pre>
    link deleted
</pre>

## Themes

### Get all themes

<pre>/themes</pre>

-   Result:

<pre>
[
    
    {
        "id": 8,
        "name": string,
        "active": boolean,
        "createdAt": datetime,
        "updatedAt": datetime
    },
    {
        "id": 8,
        "name": string,
        "active": boolean,
        "createdAt": datetime,
        "updatedAt": datetime
    },

	...
]
</pre>

### Get one theme

<pre>/themes/:id</pre>

Exemple:

<pre>/themes/11</pre>

-   Result:

<pre>
    {
        "id": 8,
        "name": string,
        "active": boolean,
        "createdAt": datetime,
        "updatedAt": datetime
    }
</pre>

### Create theme

<pre>/themes</pre>

-   Result:

<pre>
{
    "data": {
        "id": number,
        "name": string,
        "active": boolean,
        "updatedAt": string,
        "createdAt": string
    },
    "message": "New theme has been created."
}
</pre>

### Update one theme

<pre>/themes/:id</pre>

Exemple:

<pre>/themes/11</pre>

-   Result:

<pre>
    theme updated
</pre>

### Delete one theme

<pre>/themes/:id</pre>

Exemple:

<pre>/themes/11</pre>

-   Result:

<pre>
    theme deleted
</pre>
