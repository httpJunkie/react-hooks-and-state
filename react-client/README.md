# Install Packages

To get the project up and running a simple installcommand will retrieve all of our packages needed.

  npm install

## Running Our Application

  npm start

## GraphQL Stuff

```
query GistsAndRepos {
    repositoryOwner(login:"httpJunkie") {
    login
    avatarUrl
    repository(name: "rsom") {
      url
      createdAt
      databaseId
      collaborators {
        edges {
          node {
            url
          }
        }
      }
    }
  }
  viewer {
    login
    bio
    company
    gists(last: 4, orderBy: {field: CREATED_AT, direction: ASC}) {
      nodes {
        resourcePath
        createdAt
        description
        files {
          encodedName
          text
        }
        isPublic
      }
      pageInfo {
        hasNextPage
      }
    }
    myLastFourRepos: repositories(last: 4) {
      nodes {
        url
      }
      pageInfo {
        hasNextPage
      }
    }
  }
}

query ($organization: String = "couchbase", $repository: String! ) {
  organization(login: $organization) {
    name
    url
    repository(name: $repository) {
      name
      url
      sshUrl
      description
    }
  }
}
{
  "organization": "couchbase",
  "repository":"perfrunner"
}

query OrganizationForLearningReact(
  $organization: String!,
  $repository: String!,
  $withFork: Boolean!
) {
  organization(login: $organization) {
    name
    url
    repository(name: $repository) {
      name
      forkCount @include(if: $withFork)
    }
  }
}
{
  "organization": "the-road-to-learn-react",
  "repository": "the-road-to-learn-react-chinese",
  "withFork": true
}

<!-- 
  Mutation: Let's find a repo and then mutate that sucka -->

query {
  organization(login: "couchbaselabs") {
    name
    url
    repository(name: "node-ottoman") {
      id
      name
    }
  }
}

mutation AddStar($repositoryId: ID!) {
  addStar(input: { starrableId: $repositoryId }) {
    starrable {
      id
      viewerHasStarred
    }
  }
}
{
  "repositoryId": "MDEwOlJlcG9zaXRvcnkxNDMxNTMwNA=="
}

```